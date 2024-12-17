export const GifItem = ({ title, url, id }) => {
    console.log(url, title, id);
  
    return (
      <>
        <div
  class="block  rounded-lg bg-slate-200 shadow-secondary-1 dark:bg-surface-dark p-2">
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat"
    data-twe-ripple-init
    data-twe-ripple-color="light">
<img  src={url} alt="" />
 
  </div>
  <div class="p-6 text-surface dark:text-white">
<p>{title}</p>
  </div>
</div>
      </>
    );
  };
