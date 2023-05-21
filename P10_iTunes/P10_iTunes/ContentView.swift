import SwiftUI

struct Stones : Decodable {
     var results : [CollectionEntry]
 }

 struct CollectionEntry : Decodable, Identifiable {
     var collectionName : String
     var artistName : String
     var collectionId : Int
     var id : Int {
         get {
             return collectionId
         }
     }
 }

struct ContentView: View {
    @State var data : [CollectionEntry] = [CollectionEntry]()
    var body: some View {
        List(data) {entry in
            VStack(alignment: HorizontalAlignment.leading) {
                Text(entry.collectionName).font(.headline)
                Text(entry.artistName).font(.subheadline)
            }
        }.onAppear(perform: {
            self.loadJSON()
        }).refreshable {
            self.loadJSON()
        }
    }
    
    func loadJSON() {
        do {
            let file = Bundle.main.url(forResource: "stones", withExtension: "json")
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

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
