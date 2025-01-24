// 'use client'
// import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
// import { useEffect, useState } from 'react';
// import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group';
// import {CoinCombobox, CryptoComboBox} from './coin-combobox';
// import { useAllCryptos } from '../hooks/useAllCrypto';

// export function CryptoChart(){
//     const { data: cryptos, isLoading, isError } = useAllCryptos();
//     const [value, setValue] = useState<string>('');
//     const [formattedPrice, setFormattedPrice] = useState('');
    
//     const [selectedPeriod, setSelectedPeriod] = useState('7D');
//     const [comboBoxCoins, setComboBoxCoins] = useState<CryptoComboBox[]>([]);
//     const selectedCoin = comboBoxCoins?.find((coin) => coin.value === value);


//     useEffect(() =>{
//         if(cryptos){
//             const formattedData: CryptoComboBox[] = (cryptos as unknown[])
//             .map((crypto: unknown) => {
//                 if(
//                     typeof crypto === 'object' &&
//                         crypto !== null &&
//                         'id' in crypto &&
//                         'name' in crypto &&
//                         'image' in crypto &&
//                         'current_price' in crypto &&
//                         'price_change_percentage_24h' in crypto
//                 ) {
//                     return {
//                         value: crypto.id as string,
//                         label: crypto.name as string,
//                         icon: crypto.image as string,
//                         price: String(crypto.current_price),
//                         change: 
//                         (crypto.price_change_percentage_24h as number).toFixed(4)[0] !==
//                         '-'
//                         ? `+${(crypto.price_change_percentage_24h as number).toFixed(4)
//                         }`
//                         : (crypto.price_change_percentage_24h as number).toFixed(4),
//                     };
//                 }
//                 return null;
//             })
//             .filter((item): item is CryptoComboBox => item !== null);
//             setComboBoxCoins(formattedData);
//         }
//     }, [cryptos]);

//     useEffect(() =>{
//         if (comboBoxCoins && comboBoxCoins.length > 0 && !value){
//             setValue(comboBoxCoins[0].value);
//         }
//     }, [comboBoxCoins, value]);

//     useEffect(() =>{
//         if (value) {
//             if (selectedCoin) {
//                 const numericCoinPrice = parseFloat(selectedCoin.price);
//                 const formattedPrice = numericCoinPrice.toLocaleString('en-US', {
//                     style: 'currency',
//                     currency: 'USD',
//             });
//             setFormattedPrice(formattedPrice);
//             }
//         }

//     },[value, comboBoxCoins]);

//     function onChangeToggleGroup(item: string){
//         setSelectedPeriod(item);
//     }
// }

// return (
//     <Card className='col-span-4 m-5 border-none shadow-none'>
//         <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
//             <CardTitle className='text-base font-normal'>
//                 <CoinCombobox
//                     coins={comboBoxCoins}
//                     isLoading={isLoading}
//                     isError={isError}
//                     value={value}
//                     setValue={setValue}
//                 />

//                 <div className='mt-4'>
//                     <span className='text-2xl font-bold'>{formattedPrice}</span>
//                     <span
//                     className={`ml-2 text-sm ${
//                         selectedCoin?.change[0] === '-' 
//                        ? 'text-red-500'
//                        : 'text-green-500'
//                     } `}
//                     >
//                         {selectedCoin?.change}
//                     </span>
//                 </div>
//             </CardTitle>
//             <div className='flex gap-2'>
//                     <ToggleGroup
//                     value={selectedPeriod}
//                     onValueChange={onChangeToggleGroup}
//                     type='single'
//                     >
//                         {['7D', '15D', '30D'].map((period, key) => (
//                             <ToggleGroupItem
//                             key={key}
//                             value={`${period}`}
//                             >
//                                 {period}
//                             </ToggleGroupItem>
//                         ))}
//                     </ToggleGroup>
//             </div>
//         </CardHeader>
//         <CardContent></CardContent>
//     </Card>
// );

