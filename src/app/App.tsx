import { useEffect } from "react"
import { Button, Text, View } from "react-native"
import NativeCheckFile from "../NativeCheckFile"

const App: React.FC = () => {
    useEffect(() => {
        const fn = async () => {
            console.log("test")
            console.log(NativeCheckFile)
            const x = await NativeCheckFile?.doesFileExists("reader.exe")
            console.log(x)
        }
        fn()
    })

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text selectable className="underline">
                Hello World
            </Text>
            <Button title="Does File Exists?" />
        </View>
    )
}

export default App
