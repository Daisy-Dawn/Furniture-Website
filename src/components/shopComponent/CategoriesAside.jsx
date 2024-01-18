import React from "react";
import Input from "./Input";
import {
  ChairList,
  CupboardList,
  TableList,
  BedFrameList,
  StoolList,
  KitchenList,
  SofaList,
  CabinetList,
  LightsList,
  FlowerVaseList,
  FurnitureStyles,
} from "../../data/index";

const CategoriesAside = ({ handleChange }) => {
  return (
    <div className="text-lead font-nunito">
      <div>
        <h2 className="text-lead lg:text-[20px] text-[16px] font-bold mb-[1rem]">
          Categories
        </h2>
        <div className="flex gap-2 flex-col">
          <label className="text-[13px] cursor-pointer flex items-center gap-1 lg:text-[20px] text-gray-800 hover:text-bGrey">
            <input
              onChange={handleChange}
              value=""
              className="w-4 h-4 cursor-pointer"
              type="radio"
              name="test"
            />
            <span className=""></span>
            All
          </label>

          <Input
            color=""
            name="test"
            value="chair"
            handleChange={handleChange}
            title={`Chair (${ChairList.length})`}
          />
          <Input
            color=""
            name="test"
            value="cupboard"
            handleChange={handleChange}
            title={`Cupboard (${CupboardList.length})`}
          />
          <Input
            color=""
            name="test"
            value="table"
            handleChange={handleChange}
            title={`Home Table (${TableList.length})`}
          />
          <Input
            color=""
            name="test"
            value="bedFrame"
            handleChange={handleChange}
            title={`Bed Frames (${BedFrameList.length})`}
          />
          <Input
            color=""
            name="test"
            value="stool"
            handleChange={handleChange}
            title={`Bar Stool (${StoolList.length})`}
          />
          <Input
            color=""
            name="test"
            value="kitchen"
            handleChange={handleChange}
            title={`Kitchen Furniture (${KitchenList.length})`}
          />
          <Input
            color=""
            name="test"
            value="sofa"
            handleChange={handleChange}
            title={`Sofa (${SofaList.length})`}
          />
          <Input
            color=""
            name="test"
            value="cabinet"
            handleChange={handleChange}
            title={`Cabinet (${CabinetList.length})`}
          />
          <Input
            color=""
            name="test"
            value="lights"
            handleChange={handleChange}
            title={`Lights (${LightsList.length})`}
          />
          <Input
            color=""
            name="test"
            value="flowervase"
            handleChange={handleChange}
            title={`Flower Vase (${FlowerVaseList.length})`}
          />
          <Input
            color=""
            name="test"
            value="furnitureStyles"
            handleChange={handleChange}
            title={`Furniture Styles (${FurnitureStyles.length})`}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesAside;
