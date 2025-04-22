<template>
    <div class="page-container mt-5 mx-2 lg:mx-16 text-gray-800 dark:text-gray-200 mb-40">
        <h1 class="text-center">Studios and Careers</h1>
        <section class="studios">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div v-for="(studio, index) in this.studios" class="grid grid-cols-[1fr_2fr]" :key="index">
                    <img class="p-5 sm:p-10 my-auto" :src="studio.logo" alt="">
                    <div class="mt-10 space-y-2">
                        <h2>{{ studio.name }}</h2>
                        <p>{{ studio.location }}</p>
                        <p>{{ studio.email }}</p>
                        <p>{{ studio.website }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// state management
import { mapStores } from 'pinia'; // mapStores gives us access to the state
import useDataStore from '@/stores/states'; // convention: use<storeID>Store


export default {
    name: 'Jobs',
    components: {

    },
    data() {
        return {
            studios: []
        }
    },
    methods: {

    },
    computed: {
        ...mapStores(useDataStore),
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100)
        })

        const companyNames = ['Algorithm', 'ALT Animation', 'and maps and plans', 'Boulder Media', 'Brown Bag Films', 'Cantilever Media', 'Cardel Entertainment', 'Cartoon Saloon', 'Curiosity Studio', 'Daily Madness', 'Distillery Films', 'Dog Ears', 'Dream Logic Studios', 'elk.Studios', 'Enter Yes™', 'Flickerpix', 'Giant Animation Studios', 'Igloo Animations', 'Ink and Light', 'JAM Media', 'Kavaleer', 'Lighthouse Studios', 'Little Moon', 'Maverick Films', 'Moetion Films', 'Monster Entertainment', 'Paper Owl Films', 'Paper Panther', 'Pictor', 'Pink Kong Studios', 'Pioneertown Productions', 'Piranha Bar', 'Revelator', 'SANAM', 'Score Draw Media', 'Sixteen South', 'Stiúidio Fia', 'Studio 9', 'Studio Meala', 'TAUNT', 'Treehouse Republic', 'Trickshot Films', 'Triggerfish', 'Turnip + Duck', 'Wiggleywoo']
        const companyLocations = ['Unit 15 Trinity Technology & Enterprise Campus, Pearse St, Dublin, D02 AD79', '123-125 Main Street, Bangor, Co Down, Northern Ireland, BT20 4AE', 'Dublin, Ireland.', '14 Hawkins Street, Dublin 2', 'Brown Bag Films, Block C, Smithfield Market, Dublin 7', 'Dublin, Ireland', 'Info@cardelentertainment.com', 'The Maltings, Tilbury Place, Kilkenny', 'The Chocolate Factory26 Kings Inn StreetDublin 1, Ireland', 'The Warehouse, 12 Richmond Row, Portobello, Dublin 8, Ireland', '1 Garden Row, Kilkenny, R95X95A.', '10-12 Bishop StreetDerry BT48 6PWN Ireland', '34 Baggot Street LowerDublin,  Ireland', 'Táin Court, 60, Bridge St, Dundalk, Co. Louth', 'studio@enteryes.com', "7-12 St.Helen's Business Park, Holywood, BT189HQ", '2nd Floor Phibsborough TowerPhibsborough,Dublin 7', '7 Upper Pembroke Street, Dublin 2', 'info@ink-and-light.com', '40 Lower Kevin Street, Dublin 8. D08T50', 'Kavaleer Productions Unit A, Digital Depot, Digital Hub, D08 TCV4', "Lighthouse Studios,St. Kieran's College,College Rd, KilkennyR95 Y99T", 'Little Moon Animation,Carlisle Building,51 Brack… Industrial Estate,Dublin 18,D18 CV48, Ireland', 'Gort na MonaUpper Glenageary RoadGlenagearyCo. DublinA96 X9F8Ireland', 'moetionfilms.com', 'The Monster Mews, Rear 51,Merrion Square, Dublin 2, Ireland', 'Holywood, Northern Ireland', 'Paper Panther, Leeson Street Upper, Dublin 4', 'aria@pictor.ie', 'The Liffey Trust Building, Unit D2, Sherrif Street, Dublin 1', 'pioneertownproductions.com', '37 Fitzwilliam Square WestDublin 2Ireland', 'revelatorstudio.com', 'SANAMSt Abbey’s Killiney Hill RdKillineyCo Dublin', '116 Bloomfield Avenue, Belfast, Northern Ireland, BT5 5AE', 'website@sixteensouth.tv', 'paulmcdonnelldesign@gmail.com', '9 North Great Georges Street, Dublin 1, Ireland', 'The Spool Factory, Patrick St, Mockmoyne, Boyle, Co. Roscommon,F52 V635', '7-11 Linenhall Street, Belfast, BT2 8AA', '2nd Floor, The Connolly Building, 42/43 Amiens Street, Dublin 1 D01 E4X5', '24 Adelaide Street, Dun Laoghaire, County Dublin, A96YD98', 'F2 CREW Building, Cluain MhuireWellpark RoadGalwayH91 8K85IRELAND', 'info@turnipandduck.com', '85 Burnell Park Avenue, Castleknock, Dublin 15']
        const companyEmails = ['info@algorithm.ie', 'info@altanimation.com', 'hello@andmapsandplans.com', 'info@bouldermedia.tv', 'info@brownbagfilms.com', '', 'Info@cardelentertainment.com', 'info@cartoonsaloon.ie', 'hello@curiositystudio.com', '', 'info@distilleryfilms.ie', 'hello@cheersdogears.com', '', 'info@elkstudios.tv', 'studio@enteryes.com', 'enquiries@flickerpix.com', 'hello@giant.ie', 'info@iglooanimations.com', 'info@ink-and-light.com', 'info@jammedia.com', 'info@kavaleer.com', '', '', 'info@maverickfilms.ie', '', 'andrew@monsterentertainment.tv', 'jobs@paperowlfilms.com', 'hello@paperpanther.ie', 'aria@pictor.ie', 'niamh@pinkkongstudios.ie', '', 'info@piranhabar.ie', '', 'aisli@sanam.ie', '', 'website@sixteensouth.tv', 'paulmcdonnelldesign@gmail.com', '', 'info@studiomeala.com', 'hello@tauntstudios.com', 'dale@treehouserepublic.com', 'info@trickshotfilms.com', 'hello@triggerfish.com', 'info@turnipandduck.com', 'susan@wiggleywoo.com']
        const companyWebsites = ['algorithm.ie', 'altanimation.com', 'andmapsandplans.com', 'bouldermedia.tv', 'brownbagfilms.com', 'cantilevermedia.ie', 'cardelentertainment.com', 'cartoonsaloon.ie', 'curiositystudio.com', 'dailymadnessproductions.com', 'distilleryfilms.ie', 'cheersdogears.com', 'dreamlogic.ie', 'elkstudios.tv', 'enteryes.com', 'flickerpix.com', 'giantanimation.ie', 'iglooanimations.com', 'ink-and-light.com', 'jammedia.com', 'kavaleer.com', 'lighthousestudios.ie', 'littlemoonanimation.com', 'maverickfilms.ie', 'moetionfilms.com', 'monsterentertainment.tv', 'paperowlfilms.com', 'paperpanther.ie', 'pictor.ie', 'pinkkongstudios.ie', 'pioneertownproductions.com', 'piranhabar.ie', 'revelatorstudio.com', 'sanam.ie', ' scoredrawmedia.com', 'sixteensouth.tv', 'paulmcdonnelldesign@gmail.com', 'studio9.ie', ' studiomeala.com', 'tauntstudios.com', 'treehouserepublic.com', 'trickshotfilms.com', 'triggerfish.com', 'turnipandduck.com', 'wiggleywoo.com']
        const companyLogos = ['https://animationireland.com/wp-content/uploads/2024/08/logo_black_name-205x205.png', 'https://animationireland.com/wp-content/uploads/2022/06/Untitled-design-12-205x205.png', 'https://animationireland.com/wp-content/uploads/2021/09/amap_logo_black-400-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/Square-logo.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/BBF-logo-2020-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2021/02/CM-Logo-Square-205x205.png', 'https://animationireland.com/wp-content/uploads/2019/12/Cardel-logo-AI.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/330px-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2023/11/curiosity-studios-205x205.png', 'https://animationireland.com/wp-content/uploads/2018/04/DAILY_MADNESS_SQUARE-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2019/05/Distillery-Films-tile-200-x-200-px.jpg', 'https://animationireland.com/wp-content/uploads/2022/06/Untitled-design-11-205x205.png', 'https://animationireland.com/wp-content/uploads/2016/09/Untitled-1-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2018/11/elk-head-Square-205x205.png', 'https://animationireland.com/wp-content/uploads/2024/04/EnterYes-SQ-Logo-2-205x205.png', 'https://animationireland.com/wp-content/uploads/2022/06/FP_LOGO-colour-205x205.png', 'https://animationireland.com/wp-content/uploads/2016/03/Giant-Square-205x205.png', 'https://animationireland.com/wp-content/uploads/2016/03/Igloo-Logo-on-Black-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/INLlogoSquare-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/jam-media_331-205x205.png', 'https://animationireland.com/wp-content/uploads/2016/03/K-logo-.jpg', 'https://animationireland.com/wp-content/uploads/2019/11/LHS-LOGO.png', 'https://animationireland.com/wp-content/uploads/2021/06/lm_animationireland_logos-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2019/12/Maverick-Logo-Square-200x200px-%C2%A9-Maverick-Films-Limited.-All-Rights-Reserved.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/moetion-films_331-205x205.png', 'https://animationireland.com/wp-content/uploads/2016/03/monster-ent_331-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2022/11/Paper_Owl_Logo_CMYK-205x205.png', 'https://animationireland.com/wp-content/uploads/2021/06/AI_Square_Logo_200x200.png', 'https://animationireland.com/wp-content/uploads/2017/11/unnamed.png', 'https://animationireland.com/wp-content/uploads/2016/03/pink-kong_331-205x205.png', 'https://animationireland.com/wp-content/uploads/2024/11/Pioneer-Productions-Logo-Square-2-400x400.png', 'https://animationireland.com/wp-content/uploads/2017/12/Piranha-bar.jpg', 'https://animationireland.com/wp-content/uploads/2024/04/Revelator-square-logo-205x205.png', 'https://animationireland.com/wp-content/uploads/2020/05/SANAM_LOGO-1-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2023/08/SD_Media_Badge-Logo_1920x1080-205x205.png', 'https://animationireland.com/wp-content/uploads/2022/06/Untitled-design-11-1-205x205.png', 'https://animationireland.com/wp-content/uploads/2024/06/logo-200pxX200px.jpg', 'https://animationireland.com/wp-content/uploads/2019/12/studio_9_logo_colour-205x205.png', 'https://animationireland.com/wp-content/uploads/2020/04/SM-tile-205x205.png', 'https://animationireland.com/wp-content/uploads/2022/06/TAUNT_Logo_Square-205x205.png', 'https://animationireland.com/wp-content/uploads/2016/03/THR-VERTICAL-LOGO_WHITE-200-x-200.png', 'https://animationireland.com/wp-content/uploads/2019/12/logo_black_200x200.jpg', 'https://animationireland.com/wp-content/uploads/2020/11/Triggerfish-logo-square-1-205x205.png', 'https://animationireland.com/wp-content/uploads/2017/12/TandD_Stacked_GreyOnBlue-205x205.jpg', 'https://animationireland.com/wp-content/uploads/2016/03/wigglewoo_331-205x205.png']

        // combine the contact information accordingly
        const contacts = companyNames.map((name, index) => ({
            name: name,
            location: companyLocations[index],
            email: companyEmails[index],
            website: companyWebsites[index],
            logo: companyLogos[index]
        }));
        this.studios = contacts
    },
}
</script>