import { createApp } from 'https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js'
import animationsCateg from '../data-cms/animations/animationsData.js'

// Concepts 
createApp({
    animationsCategPath: animationsCateg.directoryPath,
    //items
    animationsCategVideos: animationsCateg.items.videos,
    animationsCategGifs: animationsCateg.items.gifs,
    // BELONGINGS
    setPreviewLink(link) {
        const outputStr = link.replace('view?usp=sharing', 'preview');
        return outputStr;
    }
  }).mount('#AnimationsWorksPage')