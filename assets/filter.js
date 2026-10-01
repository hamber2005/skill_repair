'use strict';
for (const input of document.querySelectorAll('[data-filter-table]')) {
 const table=document.getElementById(input.dataset.filterTable);
 const count=document.getElementById(input.dataset.countTarget||'visible-count');
 const select=document.querySelector('[data-category-table="'+input.dataset.filterTable+'"]');
 const filter=()=>{let n=0;for(const row of table.tBodies[0].rows){const q=input.value.trim().toLocaleLowerCase();const cat=select?select.value:'';const keep=(!q||row.textContent.toLocaleLowerCase().includes(q))&&(!cat||row.dataset.category===cat);row.hidden=!keep;if(keep)n++;}if(count)count.textContent='显示 '+n+' 项';};
 input.addEventListener('input',filter);if(select)select.addEventListener('change',filter);filter();
}
