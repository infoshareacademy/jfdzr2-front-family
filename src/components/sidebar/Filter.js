
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";

export default function Filter({numberOfFilters}, props) {


  
  return (

      <Button disabled startIcon={<FilterListIcon />} style={{color: "black"}}>
        Filter ({numberOfFilters})
            </Button>

  );
}
