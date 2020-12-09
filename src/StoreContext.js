import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = (props) => {
   return <StoreContext.Provider value={props.store}>
      {props.children}
   </StoreContext.Provider>
}

export default StoreContext;










//?React.createContext - Создаёт объект Context. Когда React рендерит компонент, который подписан на этот объект, React получит текущее значение контекста из ближайшего подходящего Provider выше в дереве компонентов.