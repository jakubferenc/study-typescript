export function log(target: Object, key: string, descriptor: TypedPropertyDescriptor<any>) {



  let originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {

    console.log(`Method ${key} was called with arguments ${JSON.stringify(args)}`);

    let result = originalMethod.apply(this, args);

  }


  return descriptor;

}
