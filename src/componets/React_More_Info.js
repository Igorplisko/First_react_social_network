



// ?Каждый объект Context используется вместе с Provider компонентом, который позволяет дочерним компонентам, использующим этот контекст, подписаться на его изменения.




//! action - это объект который описывает что именно нужно совершить он имеет тип к примеру { type: 'ADD-POST'}

//!  combineReducers - эта функция   //объединяеее наши редюсеры




//?The  "connect()" - function connects a React component to a Redux store. It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
//?The "mapStateToProps" and "mapDispatchToProps" deals with your Redux store’s state and dispatch, respectively. 