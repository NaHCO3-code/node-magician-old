/**
 * node-magician
 * @author NaHCO3-code
 */
import { PowerElement } from "./HTMLTemplates";
import { PowerSchema } from "./MNodeDefs";
import { Power , Powers} from "./Observer";
import "/src/css/style.css"

;(()=>{
  /**移除loading */
  document.getElementById("loading")?.remove();

  /**加载node模型 */
  for(let node of PowerSchema){
    Powers.set(node.name, new Power(node));
  }

  /**设置web components */
  customElements.define(
    "node-power",
    PowerElement
  )
})();
