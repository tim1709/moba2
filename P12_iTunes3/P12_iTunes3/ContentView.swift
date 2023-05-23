import SwiftUI

struct Stones : Decodable {
     var results : [CollectionEntry]
 }

 struct CollectionEntry : Decodable, Identifiable {
     var collectionName : String
     var artistName : String
     var artworkUrl100 : String
     var releaseDate : String
     var collectionId : Int
     var id : Int {
         get {
             return collectionId
         }
     }
 }

struct ContentView: View {
    @State var data : [CollectionEntry] = [CollectionEntry]()
    @State var searchText : String = "";
    @State var selectedCollection: CollectionEntry? = nil
    var body: some View {
        NavigationStack{
            VStack{
                TextField("Search for artists", text: $searchText)
                    .onChange(of: searchText, perform: { newValue in
                        loadJSON(artistSearchText: newValue)
                    })
                    .padding()
                List(data) {entry in
                    NavigationLink(destination: DetailView(collection: entry)){
                        HStack{
                            AsyncImage(url: URL(string: entry.artworkUrl100)){
                                image in image
                            }
                        placeholder: {
                            ProgressView()
                        }
                            VStack(alignment: HorizontalAlignment.leading) {
                                Text(entry.collectionName).font(.headline)
                                Text(entry.artistName).font(.subheadline)
                            }
                        }.onTapGesture {
                            selectedCollection = entry
                        }
                    }
                }.onAppear(perform: {
                    self.loadJSON(artistSearchText: searchText)
                }).refreshable {
                    self.loadJSON(artistSearchText: searchText)
                }.sheet(item: $selectedCollection) { collection in
                    DetailView(collection: collection)
                }.navigationTitle("Overview")
            }.navigationViewStyle(StackNavigationViewStyle())
        }
    }
    
    func loadJSON(artistSearchText: String){
        DispatchQueue.global().async {
            do {
                let file = URL(string: "https://itunes.apple.com/search?term=" + (artistSearchText == "" ? "sly" : artistSearchText) + "&entity=album")
                //create a data instance
                let jsonData = try Data(contentsOf: file!)
                let decoder = JSONDecoder()
                //and decode it to Stones
                data = try decoder.decode(Stones.self, from: jsonData).results
            } catch {
                fatalError("Couldn't load file from main bundle:\n\(error)")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
