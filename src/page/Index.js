function Index() {
  const nom = "Cibelle Allade"
  return (
    <div className= " flex items-center justify-center h-screen ">
   <h1 className=" text-primary text-3xl font-bold ">
      Hello <span className=" text-secondary underline">{nom}!</span>
    </h1>
    
    </div>
  );
}

export default Index;