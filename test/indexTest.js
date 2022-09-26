describe( "index.js", () => {
  it( 'should change the text on the page when DOM content has loaded', function () {
    expect( document.querySelector( 'p' )
        .textContent )
      .to.equal( "JavaScript is so cool. It lets me add text to my page programmatically." );

    const event = document.createEvent( 'Event' );
    event.initEvent( 'DOMContentLoaded', true, true );
    window.document.dispatchEvent( event );

    expect( document.querySelector( 'p' )
        .textContent )
      .to.equal( "This is really cool!" );
  } )

} )


// document. addEventListener ( 'DOMContentLoaded', () => {
//   let form = document.querySelector( 'form')
//   form. addEventListener( 'submit', (e)
//   -s
//   {
//   e.preventDefault()
//   buildToDo(e. target.new todo.value)
//   form. reset 0)
//   })
//   })
//   function buildToDo(todo){
//   let D = document.createElement('p')
//   let btn = document.createElement( 'button')
//   btn.addEventListener( 'click', handleDelete)
//   btn.textContent = 'x'
//   p.textContent =
//   "${todo}
//   p.appendChild(btn)
//   console. log (p)
//   document.querySelector ('#todo container' ).appendChild(p)
//   function handleDelete(e){
//   e.target.parentNode. remove