// функция обработки запроса
const getUsers = async (domain, setState, setLoading, setError) => {
  const response = await fetch(domain);

  // обрабатываем запрос и возможные ошибки
  try {
    if (response.ok) {
      const json = await response.json();
      setState(json);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
      throw new Error("Список пользователей не был получен");
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;