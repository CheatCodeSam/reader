import { Text, View } from "react-native"

const App = (): React.JSX.Element => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text selectable className="underline">
                Hello World
            </Text>
        </View>
    )
}

export default App
