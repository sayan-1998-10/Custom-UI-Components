import { useState } from "react";
import { data } from "./data";
import "./index.css";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function CustomAccordion() {
  const [selectedId, setSelectedId] = useState(null);
  const [isMultiSelect, setAllowMultiSelect] = useState(false);
  const [itemsSelected, setItemsSelected] = useState([]);

  const handleSingleSelection = (id: number) => {
    selectedId === id ? setSelectedId(null) : setSelectedId(id);
  };

  const handleMultiSelect = (id: number) => {
    //never mutate the original state variable
    const _itemsListCopy = [...itemsSelected];
    const itemIndex = _itemsListCopy.indexOf(id);
    itemIndex === -1
      ? _itemsListCopy.push(id)
      : _itemsListCopy.splice(itemIndex, 1);
    setItemsSelected(_itemsListCopy);
  };

  function collapseAll() {
    setItemsSelected([]);
  }

  function expandAll() {
    const allItems = data.map((item) => item.id); // add all items with their ids
    setItemsSelected(allItems);
  }

  function getExpandIcon(elementId : number){
    if(isMultiSelect){
      return itemsSelected.indexOf(elementId) !== -1 ? <ExpandLessIcon/> : <ExpandMoreIcon/>
    } else {
      return selectedId && elementId === selectedId ? <ExpandLessIcon/> : <ExpandMoreIcon/>
    }
  }

  return (
    <div className="container pt-5 bg-yellow-50">
      <div className="accoridion-options">
        {/* Toggle Multi select */}
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Checkbox id="enable-multi-select" onCheckedChange={(event) => setAllowMultiSelect(event)} />
          <label htmlFor="enable-multi-select">
            <span className="ml-2 text-sm font-bold ">Enable Multi Select</span>
          </label>
        </div>
        {/* Collapse all and Expand All*/}
        {isMultiSelect && (
          <>
            <Button onClick={collapseAll}>Collapse All</Button>
            <Button onClick={expandAll}>Expand All</Button>
          </>
        )}
      </div>

      {data &&
        data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id} className="item-wrapper">
              <div className="item-title">
                <span>{item.title}</span>
                <span
                  onClick={() =>
                    isMultiSelect
                      ? handleMultiSelect(item.id)
                      : handleSingleSelection(item.id)
                  }
                >
                 {getExpandIcon(item.id)}
                </span>
              </div>
              {!isMultiSelect && selectedId && selectedId === item.id && (
                <div className="item-content">
                  <span>{item.description}</span>
                </div>
              )}

              {isMultiSelect &&
                itemsSelected.length > 0 &&
                itemsSelected.indexOf(item.id) !== -1 && (
                  <div className="item-content">
                    <span>{item.description}</span>
                  </div>
                )}
            </div>
          );
        })}
    </div>
  );
}

export default CustomAccordion;
