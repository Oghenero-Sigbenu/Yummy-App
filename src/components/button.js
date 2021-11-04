
function Button({action, btnClass}) {
  return (
    <div className="button">
        <button className={btnClass}>{action}</button>
    </div>
  );
}

export default Button;
