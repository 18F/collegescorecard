// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import "~/sass/style.scss";
import 'leaflet/dist/leaflet.css';

import '~/js/plugins/chartjs.js';

import vueNumeralFilterInstaller from 'vue-numeral-filter';
import VueClipboard from 'vue-clipboard2';

import _ from 'lodash';

import ScorecardHeader from '~/components/ScorecardHeader.vue';
import ScorecardFooter from '~/components/ScorecardFooter.vue';

import VuexPersistence from 'vuex-persist'



export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.use(Vuetify)
  Vue.use(VueClipboard);
  Vue.use(Vuex)
  Vue.use(vueNumeralFilterInstaller, { locale: 'en' });
  Vue.component('scorecard-header', ScorecardHeader);
  Vue.component('scorecard-footer', ScorecardFooter);

    const vuexLocal = new VuexPersistence({
      storage: isClient?window.localStorage:null,
      filter: (mutation) => mutation.type != 'toggleDrawer'
    })
  

  appOptions.vuetify = new Vuetify({
    theme: {
      options: { customProperties: true},
      themes: {
        light: {
          primary: '#027A48',
          secondary: '#027A48',
          accent: '#8c9eff',
          error: '#b61d1c',
          primaryfos: '#fdb022',
          tertiary: '#ebf0f3',
          darkgrey: '#6c737c'
        },
      },
    },
  })

  Vue.prototype._ = _



  appOptions.store = new Vuex.Store({
    state: {
      fos: [],
      institutions: [],
      drawerOpen: false,
      clearForm: false,
      outboundUrl: null,
    },
    getters: {
      getInstitutions: state => state.institutions,
      getFieldsOfStudy: state => state.fos,
    },
    mutations: {
      toggleSchool(state, obj) {
        let entry;
        if (obj.schoolId) {
          entry = obj
        }
        else
        {
          entry = { schoolId: obj.id, schoolName: obj['school.name'] }
        }
        if (state.institutions.some(inst => inst.schoolId === entry.schoolId)){
          state.institutions = state.institutions.filter((value)=>{
            return value.schoolId != entry.schoolId;
          })  
        } else {
          if (state.institutions.length < 10)
            state.institutions.push(entry);
        }
      },
      toggleFieldOfStudy(state, obj) {
        let entry;
        //console.log(state);
        //console.log(obj);
        if (obj.fosTitle) {
          entry = obj;
        }
        else {
          entry = {
            code: obj.code,
            credentialTitle: (obj.credential.level === 3 ? "Bachelor's Degree" : obj.credential.title), 
            fosTitle: obj.title,
            id: obj.unit_id,
            institutionName: obj.school.name,
            credentialLevel: obj.credential.level
          }
        }
        if (state.fos.some(fos => { return fos.code == entry.code && fos.id == entry.id && fos.credentialLevel == entry.credentialLevel})) {
          state.fos = state.fos.filter((fos)=>{
            return (
              !(fos.code == entry.code && fos.id == entry.id && fos.credentialLevel == entry.credentialLevel)
            )
          });
        }
        else {
          if (state.fos.length < 10) 
            state.fos.push(entry)
        }
      },
      toggleDrawer(state, value = null) {
      if (value != null) {
          state.drawerOpen = value
        }
        else
        {
          state.drawerOpen = !state.drawerOpen;
        }
      },
      clearForm(state) {
        state.clearForm = true;
      },
      setOutboundUrl(state, value = null) {
        state.outboundUrl = value;
      }      
    },
    plugins: [vuexLocal.plugin]
  })

  // Google Analytics and Console verification codes
  head.meta.push({
    name: 'google-site-verification',
    content: 'joZQgj-M8GQ05V29ojfVsbsNk44SRgGqJfws9tBcnPU'
  })

  head.meta.push({
    name: 'google-site-verification',
    content: 'V-KEdRwSWd6GSLEWRBddZy6B5yLCs6vkRRflrImQiKE'
  })

  // Legacy mobile metas
  head.meta.push({
    name: 'HandheldFriendly',
    content: 'True'
  })
  head.meta.push({
    name: 'MobileOptimized',
    content: '320'
  })   

  //Twitter and OpenGraph
  head.meta.push({
    'http-equiv':'Content-Security-Policy',
    content: "default-src 'self' https://www.gstatic.com https//*.typekit.net https://dap.digitalgov.gov https://static.hotjar.com https://www.google-analytics.com https://www.gstatic.com https://www.googletagmanager.com https://script.hotjar.com; img-src 'self' *.googletagmanager.com data: https://*.basemaps.cartocdn.com/ *.cloud.gov *.googleapis.com *.google-analytics.com; child-src 'none'; script-src-elem *; style-src-elem  https://www.gstatic.com https://*.typekit.net/ https://fonts.googleapis.com 'self'; connect-src  https://api.data.gov https://www.google-analytics.com *.hotjar.com https://dap.digitalgov.gov https://stats.g.doubleclick.net *.hotjar.io 'self' ws:; font-src https://fonts.gstatic.com https://use.typekit.net 'self'; style-src https://www.gstatic.com https://use.typekit.net 'self'; frame-src https://vars.hotjar.com https://www.google.com"
  })
  /*
  head.meta.push({
    'http-equiv':'Content-Security-Policy',
    content: "default-src 'self' https://www.gstatic.com https//*.typekit.net https://dap.digitalgov.gov https://static.hotjar.com https://www.google-analytics.com https://www.gstatic.com https://www.googletagmanager.com https://script.hotjar.com; img-src 'self' *.googletagmanager.com data: https://*.basemaps.cartocdn.com/ *.cloud.gov *.googleapis.com *.google-analytics.com; child-src 'none'; script-src-elem * 'unsafe-inline'; style-src-elem  https://www.gstatic.com https://*.typekit.net/ https://fonts.googleapis.com 'self' 'unsafe-inline'; connect-src  https://api.data.gov https://www.google-analytics.com *.hotjar.com https://dap.digitalgov.gov https://stats.g.doubleclick.net *.hotjar.io 'self'; font-src https://fonts.gstatic.com https://use.typekit.net 'self'; style-src https://www.gstatic.com https://use.typekit.net 'self' 'unsafe-inline'; frame-src https://vars.hotjar.com https://www.google.com"
  })
  */
  head.meta.push({
    name: 'og:type',
    content: 'website'
  })   
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  })  
  head.meta.push({
    name: 'og:description',
    content: 'Find the college that’s the best fit for you! The U.S. Department of Education’s College Scorecard has the most reliable data on college costs,graduation, and post-college earnings.'
  })    
  head.meta.push({
    name: 'twitter:description',
    content: 'Find the college that’s the best fit for you! The U.S. Department of Education’s College Scorecard has the most reliable data on college costs,graduation, and post-college earnings.'
  })    
  head.meta.push({
    name: 'description',
    content: 'Find the college that’s the best fit for you! The U.S. Department of Education’s College Scorecard has the most reliable data on college costs,graduation, and post-college earnings.'
  }) 
  head.meta.push({
    name: 'og:image',
    content: 'https://collegescorecard.ed.gov/img/CollegeScorecard-Blog-Image-updated.png'
  })   
  head.meta.push({
    name: 'twitter:image',
    content: 'https://collegescorecard.ed.gov/img/CollegeScorecard-Blog-Image-updated.png'  
  })    
  
  head.script.push({
    id: '_fed_an_ua_tag',
    src: 'https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js',
  })  
  head.script.push({
    type: 'text/javascript',
    src: 'https://www.gstatic.com/charts/loader.js',
  })    
  head.script.push({
    type: 'text/javascript',
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-48605964-29',
    async: true,
  })    
  head.script.push({
    type: 'text/javascript',
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-48605964-29',
    async: true,
  })    
}
