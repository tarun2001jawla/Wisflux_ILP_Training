interface Box {
    contents: unknown;
  }

  let x : Box = {
    contents : "Hello World",
  }
  let y : Box = {
    contents : 10,
  }
  let z : Box = {
    contents : true,
  }



  if(typeof x.contents === 'string'){
    console.log(x.contents.toUpperCase());
}
//generic Box type which declares a type parameter.
  interface Box2 <Type>{
    content : Type;
  }

  let box2 : Box2<string> = {
    content : "Hello World",
  }

  let box3 : Box2<number> = {
    content : 10,
  }

  let box4 : Box2<boolean> = {
    content : true,
  }
