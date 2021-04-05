
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";

export default function Filter({numberOfFilters}, props) {


  
  return (

      <Button startIcon={<FilterListIcon />}>
        Filter ({numberOfFilters})
            </Button>

  );
}
