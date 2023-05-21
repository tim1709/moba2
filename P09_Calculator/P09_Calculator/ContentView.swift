import SwiftUI

struct ContentView: View {
    @State var firstValue: String = "1"
    @State var secondValue: String = "1"
    @State var result: String = "2"
    var body: some View {
        VStack {
            Text("Calculater").font(Font.title)
            TextField("Enter first value", text: $firstValue).textFieldStyle(RoundedBorderTextFieldStyle()).padding(10).keyboardType(.decimalPad)
            HStack{
                Spacer()
                CalcButton(text: "+", firstV: $firstValue, secondV: $secondValue, res: $result)
                Spacer()
                CalcButton(text: "-", firstV: $firstValue, secondV: $secondValue, res: $result)
                Spacer()
                CalcButton(text: "*", firstV: $firstValue, secondV: $secondValue, res: $result)
                Spacer()
                CalcButton(text: "/", firstV: $firstValue, secondV: $secondValue, res: $result)
                Spacer()
            }.padding(.vertical, 40)
            TextField("Enter second value", text: $secondValue).textFieldStyle(RoundedBorderTextFieldStyle()).padding(10).keyboardType(.decimalPad)
            Text(String(result)).font(Font.title)
        }.padding()
    }
}

struct CalcButton: View{
    var text: String
    @Binding var firstV: String
    @Binding var secondV: String
    @Binding var res: String
    var body: some View {
        Button(action: {calculate(text)}){Text(text).padding(20).border(Color.blue)}
    }
    
    func isInputValid(value: String) -> Bool {
        if Double(value) != nil {
            return true
        } else {
            return false
        }
    }
    
    func calculate(_ op: String){
        guard let fv = Double(firstV), let sv = Double(secondV) else {
                        res = "Invalid Value"
                        return}
        switch op {
            case "+":
                res = String(fv + sv)
            case "-":
                res = String(fv - sv)
            case "*":
                res = String(fv * sv)
            case "/":
                if sv != 0 {
                    res = String(fv / sv)
                } else {
                    res = "Division through 0 not possible"
                }
            default:
                res = "Invalid Operator"
            }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
