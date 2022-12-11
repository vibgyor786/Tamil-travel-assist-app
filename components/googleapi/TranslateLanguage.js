async function TranslateLanguage(item){
    const options = {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ text: item }),
      };
    
      const response = await fetch("Backend translator api", options);
      const result = await response.json();
      return result
}
export default TranslateLanguage;