function Caseta({titlu, continut})
{
    return (
        <div className="bg-gray-200 drop-shadow-3xl p-4 rounded-md shadow-md w-[250px] h-fit ml-5 mr-5">
          <h2 className="font-bold text-xs sm:text-lg text-center">{titlu}</h2>
          <p className="mt-2 text-[8px] sm:text-base text-gray-700">{continut}</p>
        </div>
      );
}

export default Caseta;