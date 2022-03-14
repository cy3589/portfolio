import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const Context = createContext<{ getter?: any; setter?: any }>({});
const useContextHook = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Cannot find provider');
  }
  return context;
};

const ContextProvider: FC = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const setter = useCallback((curScroll) => {
    setScroll(curScroll);
  }, []);

  const getter = useCallback(() => {
    return scroll;
  }, [scroll]);

  const value = useMemo(() => ({ getter, setter }), [getter, setter]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export { useContextHook };
export default ContextProvider;
