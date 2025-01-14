const conex = async (url, options = {}) => {
    try {
        const promesa = await fetch(url, options);

        // Verifica si la respuesta fue exitosa
        if (!promesa.ok) {
            throw new Error(`Error en la solicitud: ${promesa.status} ${promesa.statusText}`);
        }

        // Procesa el cuerpo de la respuesta dependiendo del contenido
        const contentType = promesa.headers.get("Content-Type");

        return await promesa.json();
        
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        throw error;
    }
};

export default conex;

