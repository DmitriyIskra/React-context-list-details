import styles from './App.module.css';
import './reset.css';
import { useState, useEffect} from 'react';

// Получение данных API
// Список людей
import getUsers from './Api/getUsers';
// конкретный человек по id
import { getUser } from './Api/getUser';

// Контексты
import { ListContext } from './context/ListContext';
import { DetailsContext } from './context/DetailsContext';

// Компоненты
import WrapperList from './List/wrapper/WrapperList';
import WrapperDetails from './Details/wrapper/WrapperDetails';

function App() {
  // Список для первой загрузки
  const [list, setList] = useState([]);
  // Данные конкретного item
  const [details, setDetails] = useState(null);
  // Индикатор загрузки списка для первой загрузки
  const [loading, setLoading] = useState(true);
  // Ошибка для первой загрузки
  const [error, setError] = useState(false);
  // Выбранный item
  const [id, setId] = useState(null);

  // индикатор загрузки выбранного id
  const [loadDetails, setLoadDetails] = useState(false)
  // ошибка загрузки по id
  const [errorId, setErrorId] = useState(false)

  useEffect(() => {
    // первый запрос для получения всех пользователей
    getUsers(process.env.REACT_APP_GET_USERS, setList, setLoading, setError);
  }, [])

  useEffect(() => {
    if(id) {
      // Из списка пользователей меняем состояние id, и делаем запрос
      // за данными пользователя по id
      getUser(
        process.env.REACT_APP_GET_USER + id + '.json',
        setDetails,
        setLoadDetails,
        setErrorId
      );
      console.log(errorId)
    }
  }, [id])

  return (
    <div className={styles.App}>
      {loading && <div className={styles.loading}> Loading... </div>}
      {error && <div className={styles.loading}>Ошибка, попробуйте перезагрузить страницу</div>}
      <ListContext.Provider value={{list, setId}}>
        {list.length > 0 && <WrapperList list={list}/>}
      </ListContext.Provider>
      {loadDetails && <div className={styles['details-loading']}> Loading... </div>}
      {errorId && <div className={styles['details-error']}> Упс, не вышло попробуйте еще разок </div>}
      {details && <DetailsContext.Provider value={details}>
        <WrapperDetails />
      </DetailsContext.Provider>}
    </div>
  );
}

export default App;