// Export default 
// use contract read
// Text name of the contract
// Button mint

import { Pressable, StyleSheet, Text, View } from "react-native";
import { useContractRead, useContractWrite } from "wagmi";

const styles = StyleSheet.create({
    heading: {
      fontSize: 20,
        fontWeight: 'bold',
    },
    lightButton: {
        backgroundColor: '#add8e6',
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
  

const MintSection = () => {
    const { data, isError, isLoading, isSuccess } = useContractRead({
        address: 'YOUR_CONTRACT_ADDRESS',
        abi: 'YOUR_ABI',
        functionName: 'name'
      })

      const { data: mintData, functionName, isError: contractHasErrors, isLoading: methodIsLoading, isSuccess: contractWrittenSuccess, write } = useContractWrite({
        address: 'YOUR_CONTRACT_ADDRESS',
        abi: 'YOUR_ABI',
        functionName: 'mint',
        args: [/* YOUR FUNCTION ARGS */]
      })
    return (
        <View>
            <Text style={styles.heading}> Mint Section </Text>
            <View>
                {isLoading && <Text>Loading</Text>}
                {isSuccess && <Text>Response: {data?.toString()}</Text>}
                {isError && <Text>Error reading contract</Text>}
            </View>
            <Pressable style={styles.lightButton} onPress={()=> console.log('mint')}>
                <Text> Mint </Text>
            </Pressable>
            {methodIsLoading && <Text>Loading</Text>}
            {contractWrittenSuccess && <Text>Response: {mintData?.toString()}</Text>}
        </View>
    )
}



export default MintSection;