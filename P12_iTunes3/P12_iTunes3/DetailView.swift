import SwiftUI

struct Tracks : Decodable {
    var results : [Track]
}

struct Track : Decodable, Identifiable {
    var trackId : Int?
    var trackNumber : Int?
    var trackName : String?
    var trackTimeMillis : Int?
    var id : Int? {
        get {
            return trackId
        }
    }
    
    enum CodingKeys: String, CodingKey {
            case trackId
            case trackNumber
            case trackName
            case trackTimeMillis
        }
}


struct DetailView: View {
    let collection: CollectionEntry
    @State var songs: [Track] = [Track]()
    var body: some View {
        ScrollView{
            VStack {
                Text(collection.collectionName).font(.title).padding()
                Text("Release year: \(String(collection.releaseDate.prefix(4)))").font(.subheadline)
                AsyncImage(url: URL(string: collection.artworkUrl100)){
                    image in image.resizable().scaledToFit().frame(minWidth: 0, maxWidth: .infinity, minHeight: 100, maxHeight: 250)
                }
                placeholder: {
                    ProgressView()
                }
                VStack {
                    ForEach(songs) { track in
                        HStack {
                            Text(String(track.trackNumber ?? 0))
                            Text(track.trackName ?? "").lineLimit(3)
                            Spacer()
                            Text(displayDuration(track.trackTimeMillis ?? 0))
                        }.padding(5)
                    }
                }.padding()
                Spacer()
            }
        }.onAppear {
            loadSongs()
        }
    }
    
    func loadSongs(){
        let collectionId = collection.collectionId
        DispatchQueue.global().async {
            do {
                let file = URL(string: "https://itunes.apple.com/lookup?id=\(collectionId)&entity=song")
                //create a data instance
                let jsonData = try Data(contentsOf: file!)
                let decoder = JSONDecoder()
                var tracks = try decoder.decode(Tracks.self, from: jsonData).results
                if tracks.count > 1 {
                    tracks.removeFirst()
                }
                self.songs = tracks
            } catch {
                fatalError("Couldn't load file from main bundle:\n\(error)")
            }
        }
    }
    
    func displayDuration(_ timeMillis: Int) -> String{
        let totalSeconds = timeMillis / 1000
        let minutes = totalSeconds / 60
        let seconds = totalSeconds % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }
}
