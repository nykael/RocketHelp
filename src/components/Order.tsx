import { Box, HStack, Text, useTheme } from "native-base";

export interface OrderProps {
    id: string;
    patrimony: string;
    when:string;
    status: 'open' | 'closed'
}

interface Props {
    data: OrderProps
}

export function Order({data, ...rest} : Props) {
    const {colors} = useTheme()

    const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300]


    return (
        <HStack
          bg="gray.600"
          mb={4}
          alignItems="center"
          justifyContent="space-between"
          rounded="sm"
          overflow="hidden"
        >
            <Box h="full" w={2} bg={statusColor} />
                <Text color="white" fontSize="md">
                    Patrimônio {data.patrimony}
                </Text>
        </HStack>
    )
}