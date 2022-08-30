function reverseCase(string) {
    let regex=/([a-z])\1+/gi;
  const toBeReplaced = string.match( regex ).join();
  if ( toBeReplaced.toUpperCase() === toBeReplaced ) {
    return string.replace( regex,toBeReplaced.toLowerCase() );
  }
  else {
    return string.replace( regex, toBeReplaced.toUpperCase() );
  }
}

console.log(reverseCase( "HeLLo" ))

