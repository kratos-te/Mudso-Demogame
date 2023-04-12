interface orangeProps {
    classes: string;
    content: string;
}

const OrangeBtn = ({classes, content}: orangeProps): any => {
  return (
      <div className={`font-semibold border-2 border-black rounded-lg py-[1px] bg-orangeBack pb-1 text-center text-xl ${classes}`}>{content}</div>
  )
}

export default OrangeBtn;