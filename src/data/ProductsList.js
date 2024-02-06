// import axios from "axios"
// import React, { useState, useEffect } from "react"



// const ProductsList = () => {
//     const bedframeAPI = process.env.BED_FRAME_LIST
//     const cabinetAPI = process.env.CABINET_LIST
//     const chairAPI = process.env.CHAIR_LIST
//     const flowerVaseAPI = process.env.FLOWER_VASE_LIST
//     const furnitureStylesAPI = process.env.FURNITURE_STYLES_LIST
//     const kitchenAPI = process.env.KITCHEN_FURNITURE_LIST
//     const lightsAPI = process.env.LIGHT_LIST
//     const sofaAPI = process.env.SOFA_LIST
//     const stoolAPI = process.env.STOOL_LIST
//     const TableAPI = process.env.TABLE_LIST

//     const [loading, setLoading] = useState(false)

//     const [bedFrameList, setBedFrameList] = useState([]);
//     const [chairList, setChairList] = useState([]);
//     const [cabinetList, setCabinetList] = useState([]);
//     const [flowerVaseList, setflowerVaseList] = useState([]);
//     const [furnitureStyleList, setfurnitureStyleList] = useState([]);
//     const [kitchenList, setKitchenList] = useState([]);
//     const [lightsList, setLightsList] = useState([]);
//     const [sofaList, setSofaList] = useState([]);
//     const [stoolList, setStoolList] = useState([]);
//     const [TableList, setTableList] = useState([]);
//     const [productList, setProductList] = useState([]);
    
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const bedFrameResponse = await axios.get(bedframeAPI)
//                 const chairResponse = await axios.get(chairAPI)
//                 const cabinetResponse = await axios.get(cabinetAPI)
//                 const flowerVaseResponse = await axios.get(flowerVaseAPI)
//                 const furnitureStyleResponse = await axios.get(furnitureStylesAPI)
//                 const kitchenResponse = await axios.get(kitchenAPI)
//                 const lightsResponse = await axios.get(lightsAPI)
//                 const sofaResponse = await axios.get(sofaAPI)
//                 const stoolResponse = await axios.get(stoolAPI)
//                 const tableResponse = await axios.get(TableAPI)
//                 setBedFrameList(bedFrameResponse.data)
//                 setChairList(chairResponse.data)
//                 setCabinetList(cabinetResponse.data)
//                 setflowerVaseList(flowerVaseResponse.data)
//                 setfurnitureStyleList(furnitureStyleResponse.data)
//                 setKitchenList(kitchenResponse.data)
//                 setLightsList(lightsResponse.data)
//                 setSofaList(sofaResponse.data)
//                 setStoolList(stoolResponse.data)
//                 setTableList(tableResponse.data)
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
//         fetchData();
//         setProductList(...bedFrameList, ...chairList, ...cabinetList, ...flowerVaseList, ...furnitureStyleList,
//             ...kitchenList, ...lightsList, ...sofaList, ...stoolList, ...TableList)
//     }, [])
//     console.log(productList)
// }

// export default ProductsList

import BedframeList from './BedFrameList'
import CabinetList from './CabinetList'
import ChairList from './ChairList'
import CupboardList from './CupboardList'
import FlowerVaseList from './FlowerVaseList'
import FurnitureStyles from './FurnitureStyles'
import KitchenList from './KitchenList'
import LightsList from './LightsList'
import SofaList from './SofaList'
import StoolList from './StoolList'
import TableList from './TableList'


const ProductsList = [...BedframeList, ...CabinetList, ...ChairList, ...CupboardList,
...FlowerVaseList, ...FurnitureStyles, ...KitchenList, ...LightsList, ...SofaList, ...StoolList, ...TableList
]

export default ProductsList
