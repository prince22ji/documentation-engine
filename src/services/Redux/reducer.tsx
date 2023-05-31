export default function reducer(state: any = [], action: any) {
  console.log("dispatchfunction triggered", state, action);
  if (action.type === "addPageNav") {
    if (state.find((element: any) =>action.payload.code === element.code?true:false)) {
      return state;
    }else{
        return [...state, action.payload];
    }
  }
  if (action.type === "resetPageNavs") {
    return [];
  }
}
