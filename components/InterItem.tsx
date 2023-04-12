interface interProps {
    imageURL: string;
    classes: string;
}

const InterItem = ({ imageURL, classes }: interProps): JSX.Element => {
  return (
      <div className={`flex justify-center items-center  bg-greyBack border-2 border-black overflow-hidden rounded-full aspect-square max-w-none ${classes}`} >
    <img className="max-w-full min-w-full" src={imageURL} alt="Wrong URL" />
  </div>
  )
}

export default InterItem;