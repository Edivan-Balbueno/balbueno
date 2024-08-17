<script>
        var toolbarOptions = [
           ['bold', 'italic', 'underline', 'strike'],
           ['blockquote', 'code-block'],

           [{ 'header': 1 }, { 'header': 2 }],
           [{ 'list': 'ordered'}, { 'list': 'bullet' }],
           [{ 'script': 'sub'}, { 'script': 'super' }],
           [{ 'direction': 'rtl' }],

           [{ 'size': ['small', false, 'large', 'huge'] }],
           [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

           [{ 'color': [] }, { 'background': [] }],
           [{ 'font': [] }],
           [{ 'align': [] }],
           ['image'],

           ['clean'],
        ];

        var quill = new Quill('#editor', {
          modules: {
            toolbar: {
              container: toolbarOptions,
              //handlers: urlImage
            }
          },
          placeholder: 'Seu texto aqui!!!',
          theme: 'snow',
        });

        function urlImage(){
          let selection = this.quill.getSelection()
          let prompt = window.prompt('URL da image')
          if (prompt == null || prompt == ''){return}
          this.quill.insertEmbed(select.index, 'image', prompt)
        }

        function return_html(){
          console.log(quill.root.innerHTML)
          return quill.root.innerHTML
        }

        function salvar(){
          csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value
          artigo = return_html()

          fetch("/home/salvar/",{
            method: 'POST',
            headers: {
              'X-CSRFToken': csrf_token
            },
            body: JSON.stringify({'artigo': artigo})

          }).then(function(result){
            return result.json()

          }).then(function(data){
            //console.log(data)
            location.reload(true)
          })
        }
</script>