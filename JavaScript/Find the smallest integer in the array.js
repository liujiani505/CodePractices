class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a,b) => a - b)
    return args[0]
  }
}

// solution 2
class SmallestIntegerFinder {
  findSmallestInt(args){
    return Math.min(...args)
  }
}