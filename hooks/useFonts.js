import * as Font from "expo-font";

export default useFonts = async () =>
	await Font.loadAsync({
		"Ubuntu": require("../assets/fonts/Ubuntu-Medium.ttf"),
	});
