import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'
import belongingsCateg from '../data-cms/illustrations/belongingsCategData.js'
import conceptsCateg from '../data-cms/illustrations/conceptsCategData.js'
  createApp({
    // exposed to all expressions
    count: 0,
    currentCateg: 'belongings',
    // direcory path of the works images
    // belongings category items
    // directory path
    belongingsCategPath: belongingsCateg.directoryPath,
    //items
    belongingsCategItems: belongingsCateg.items,
    // CONCEPTS
    conceptsCategPath: conceptsCateg.directoryPath,
    conceptsCategItems: conceptsCateg.items,
    // getters
    // get plusOne() {
    //   return this.count + 1
    // },
    // methods
    setCategTab(categ) {
        // switch tab based on cates
      this.currentCateg = categ;
    }
  }).mount('#illustrationsWorksPage')
