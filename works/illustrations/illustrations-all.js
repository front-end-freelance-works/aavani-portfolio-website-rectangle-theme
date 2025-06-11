import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'
import belongingsCateg from '../data-cms/illustrations/belongingsCategData.js'
import conceptsCateg from '../data-cms/illustrations/conceptsCategData.js'
import dysfunctionalFamilyCateg from '../data-cms/illustrations/dysfunctionalFamilyCategData.js'
import eyesCateg from '../data-cms/illustrations/eyesCategData.js'
import hangingObjectsCateg from '../data-cms/illustrations/hangingObjectsCategData.js'
// BELONGINGS 
createApp({
    belongingsCategPath: belongingsCateg.directoryPath,
    //items
    belongingsCategItems: belongingsCateg.items,
    // BELONGINGS
  }).mount('#belongingsWorksPage')
  // concepts page
  createApp({
    // CONCEPTS
    conceptsCategPath: conceptsCateg.directoryPath,
    conceptsCategItems: conceptsCateg.items,
  }).mount('#conceptsWorksPage')
  // dysfunctional family categ page
  createApp({
    dysfunctionalFamilyCategPath: dysfunctionalFamilyCateg.directoryPath,
    dysfunctionalFamilyCategItems: dysfunctionalFamilyCateg.items,
  }).mount('#dysfunctionalFamilWorksPage')
  // eyes categ page
  createApp({
    eyesCategPath: eyesCateg.directoryPath,
    eyesCategItems: eyesCateg.items,
  }).mount('#eyesWorksPage')
  // hanging Objects categ page
  createApp({
    hangingObjectsCategPath: hangingObjectsCateg.directoryPath,
    hangingObjectsCategItems: hangingObjectsCateg.items,
  }).mount('#hangingObjectsWorksPage')
