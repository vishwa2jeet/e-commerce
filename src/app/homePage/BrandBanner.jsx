import React from 'react'
import Zara from '../../../public/svg/brandName/zara.svg'
import CalvinKlein from '../../../public/svg/brandName/calvinKlein.svg'
import Gucci from '../../../public/svg/brandName/gucci.svg'
import Prada from '../../../public/svg/brandName/prada.svg'
import Versace from '../../../public/svg/brandName/versace.svg'
import Image from 'next/image'
import { Flex } from '@chakra-ui/react'
function BrandBanner() {
  return (
    <Flex bgColor={'black'} px={20} py={10} justify='space-between' >
        <Image src={Versace} alt='Versace' />
        <Image src={Zara} alt='Zara' />
        <Image src={Gucci} alt='Gucci' />
        <Image src={Prada} alt='Prada' />
        <Image src={CalvinKlein} alt='CalvinKlein' />

    </Flex>
  )
}

export default BrandBanner