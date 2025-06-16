import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'
import ceramicsConceptsCateg from '../data-cms/ceramics/conceptsData.js'
import ceramicsFlameWorksCateg from '../data-cms/ceramics/flameWorksData.js'
import ceramicsGlassBlowingCateg from '../data-cms/ceramics/glassBlowingData.js'
import ceramicsPotteryCateg from '../data-cms/ceramics/potteryData.js'

// Concepts 
createApp({
    ceramicsConceptsCategPath: ceramicsConceptsCateg.directoryPath,
    //items
    ceramicsConceptsCategItems: ceramicsConceptsCateg.items,
    // BELONGINGS
  }).mount('#CeramicsConceptsWorksPage')
// Flame Works 
createApp({
    ceramicsFlameWorksCategPath: ceramicsFlameWorksCateg.directoryPath,
    //items
    ceramicsFlameWorksCategItems: ceramicsFlameWorksCateg.items,
    // BELONGINGS
  }).mount('#CeramicsFlameWorksPage')
// Glass Blowing 
createApp({
    ceramicsGlassBlowingCategPath: ceramicsGlassBlowingCateg.directoryPath,
    //items
    ceramicsGlassBlowingCategItems: ceramicsGlassBlowingCateg.items,
    // BELONGINGS
  }).mount('#CeramicsGlassBlowingPage')
// Pottery 
createApp({
    ceramicsPotteryCategPath: ceramicsPotteryCateg.directoryPath,
    //items
    ceramicsPotteryCategItems: ceramicsPotteryCateg.items,
    // BELONGINGS
  }).mount('#CeramicsPotteryPage')