export const getUser = async (domain, setState, setLoad, setError) => {
  setState(null);
  setLoad(true);
  setError(false);

  const response = await fetch(domain);

  try {
    if (response.ok) {
      const result = await response.json();
      setLoad(false);
      setState(result);
    } else {
      setLoad(false);
      setError(true);
      throw new Error("Загрузка не удалась");
    }
  } catch (error) {
    console.log(error);
  }
};
