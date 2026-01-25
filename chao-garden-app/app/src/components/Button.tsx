import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "secondary";
};

export default function Button ({
    title,
    onPress,
    disabled = false,
    loading = false,
    variant = "primary",
}: ButtonProps){
    const base = "px-6 py-3 rounded-2xl shadow-md items-center justify-center";

    const variants = {
        primary: "bg-green-500",
        secondary: "bg-blue-500",
    };

    const disabledStyle = disabled ? "opacity-50": "";

    return(
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={onPress} disabled={disabled || loading}
            className={`${base} ${variants[variant]} ${disabledStyle}`}
        >
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text className="text-white font-bold text-lg">
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
}