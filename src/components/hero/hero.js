export function hero(editor) {
    editor.BlockManager.add('hero 1', {
        label: 'Hero 1',
        content: 
            `
            <div class="row">
            <div class="container">
                <div class="row p-3 m-3">
                <div class="col">
                    <div data-gjs-type="text" class="h3">
                    Its not you, its your eyebrows
                    </div>
                    <div data-gjs-type="text" class="display-1">
                    Friends dont let friends have bad eyebrows !!
                    </div>
                    <div class="text-center m-2">
                        <button class="btn btn-warning btn-lg btn-block" style="width:80%"><i class="fas fa-phone"></i>(910) 491-1926</button>
                    </div>
                </div>

                <div class="col">
                <img data-gjs-type="image" class="img-fluid" alt="Responsive image"  >  
                </img>
                </div>
            </div>
            </div>
            `,
          category : 'Hero'
      })


}
