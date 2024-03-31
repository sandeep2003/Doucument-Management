export function EncodeDecode(encode: any, decode: any) {
  if (encode !=='n') {
      return btoa(encode);
  } else if(decode !=='n') {
      return atob(decode);
  }else{
      return false;
  }
}
