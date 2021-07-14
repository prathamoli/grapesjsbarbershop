import './App.css';
import React,{useState,useEffect} from 'react'
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import axios from 'axios';
import './grapesjs-template.min.css'
import plugin from 'grapesjs-template-manager';
import { navbar } from './components/navbar/navbar';
import 'tailwindcss/tailwind.css'
import { hero } from './components/hero/hero';

function App() {

  const [editor,setEditor] = useState(null)


  useEffect(() => {


  


    axios.get('https://raw.githubusercontent.com/prathamoli/barbershopdata/main/category.json')
    .then(function (response) {
    
      function myPlugin(editor){

        
        // Add blocks
        editor.BlockManager.add('services', {
          label: 'Services',
          content: { type: 'collection'},
          category: 'Service'
        });
        editor.DomComponents.addType('collection', {

          model: {
            
            defaults: {
              traits: [
                {
                  type: 'text',
                  name: 'Business_ID',
                  label: 'Business ID',
                }],
              // As by default, traits are binded to attributes, so to define
              // their initial value we can use attributes
              attributes: { type: 'text', required: true },
            },
            // Customize the export HTML
            init() {
              console.log(this.getTrait('Business_ID').props());
            },
            updated(property, value, prevValue) {
              console.log(this.getTrait('Business_ID').props());
            },
            toHTML() {
              const category = this.get('category');
              return `<div>{ VAR-TO-REPLACE-${category} }</div>`
            },
        
          },
          
          view: {
            onRender() {
        
        
              const { $el, model } = this;
              const category = model.get('category');
              $el.empty();
        
              
              const dataList = response.data.category.map((x)=>{
                
                const services = x.services.map((service)=>(
                  
                    `<div class="col-sm-6 col-xs-12 " style="display: inline-block" >
        
                      <h2 >${service.name} ${service.price}</h2>
                      <p>
                        ${service.description}
                      </p>
        
                      </div>
                      `
                  
                ))
                const name =x.name
        
                return (
                  `
                  <!--Grapes CSS-->
                  <link rel="stylesheet" href="https://grapesjs.com/stylesheets/grapes.min.css">
                  <link rel="stylesheet" href="https://grapesjs.com/stylesheets/grapesjs-preset-webpage.min.css">
                  <link href="https://unpkg.com/grapick/dist/grapick.min.css" rel="stylesheet">
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!--Grapes JS-->
                  <script src="https://grapesjs.com/js/grapes.min.js"></script>
                  <script src="https://grapesjs.com/js/grapesjs-preset-webpage.min.js"></script>
              <!--Lory Slider-->
                  <script src="https://grapesjs.com/js/grapesjs-lory-slider.min.js"></script>

                  <div class="container">
                  <h1 class="text-center">${name}</h1>
                  <div class="row align-top">
                  ${services.join("")}
                  </div>
                  </div>
        
                  `
                )
              })
            
              
        
            
        
          dataList.forEach(name => {
             // If you append to the element, products will be static
            // and you won't be able to select/edit them.
            // So this approach is to use when you want kind 
            // of placeholders elements.
             $el.append(name);
            
            // If actually need to select/edit them, append the HTML
            // to the model
            // model.append(product);
           });
      
      
          
      
            
          }
        },
        
      })
    }


    const editor = grapesjs.init({

      container : "#editor",
      plugins : [
        gjsPresetWebpage,
        myPlugin,
        plugin,
        navbar,
        hero

      ],
      pluginsOpts: {
        plugin: { /* options */ }
      },
      allowScripts: 1,
      canvas: {
        styles: [
          './bootstrap.css',
          './style.css',
        "https://raw.githubusercontent.com/prathamoli/barbershopdata/main/color.css",
        "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.0.0-insiders.4a070ac/tailwind.min.css"
        ],
        scripts : [

        ]
      },
      
      styleManager : {
        sectors: [{
          name: 'Uzeli Services',
          buildProps: ['font-family', 'min-height','background-image']
        },{
          name: 'Extra',
          buildProps: ['background-color', 'box-shadow']
        }]
      },
      fromElement: true,
      storageManager:  {
        type: 'indexeddb',

      },
    });

     // Running commands from panels
      const pn = editor.Panels;
      const panelOpts = pn.addPanel({
        id: 'options'
      });
      panelOpts.get('buttons').add([{
        attributes: {
          title: 'Open Templates'
        },
        className: 'fa fa-file-o',
        command: 'open-templates',//Open modal 
        id: 'open-templates'
      }, {
        attributes: {
          title: 'Save As Template'
        },
        className: 'fa fa-archive',
        command: 'save-as-template',//Save page as template
        id: 'save-as-template'
      }, {
        attributes: {
          title: 'Delete Template'
        },
        className: 'fa fa-trash-o',
        command: 'delete-template',//Delete open page or template
        id: 'delete-templates'
      }, {
        attributes: {
          title: 'Take Screenshot'
        },
        className: 'fa fa-camera',
        command: 'take-screenshot',//Take an image of the canvas
        id: 'take-screenshot'
      }]);

    setEditor(editor)

})    
.catch(function (error) {
  // handle error
  console.log(error);
})
    

  }, [])
  return (
    <div className="App">
      <div id="editor" ></div>
        
    </div> 
  );
}

export default App;
