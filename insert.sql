INSERT INTO `projects` SET = ? ;

SELECT LAST_INSERT_ID(); 




INSERT INTO `gantt_tasks` VALUES ('', '1', 'PHASE 1', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '0', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '2', 'CLEARING WORKS', moment(start_date).format('YYYY-MM-DD'),  moment(target_date).format('YYYY-MM-DD'), 
  '', '', '1', proj_id);
    INSERT INTO `gantt_tasks` VALUES ('', '3', 'EXCAVATION AND BACK FILL', moment(start_date).format('YYYY-MM-DD'),  moment(target_date).format('YYYY-MM-DD'), 
  '', '', '1', proj_id);

INSERT INTO `gantt_tasks` VALUES ('', '4', 'REINFORCING STILLBARS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '1', proj_id);
 INSERT INTO `gantt_tasks` VALUES ('', '5', 'CONCRETE WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
 '', '', '1', proj_id);
 INSERT INTO `gantt_tasks` VALUES ('', '6', 'a. FOOTING', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '5', proj_id);
   INSERT INTO `gantt_tasks` VALUES ('', '7', 'b. COLUMN', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '5', proj_id);
   INSERT INTO `gantt_tasks` VALUES ('', '6', 'c. FOOTING TIEBEAM', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '5', proj_id);
   INSERT INTO `gantt_tasks` VALUES ('', '7', 'd. FLOOR SLAB', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '5', proj_id);
     INSERT INTO `gantt_tasks` VALUES ('', '8', 'e. BEAM', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '5', proj_id);

 INSERT INTO `gantt_tasks` VALUES ('', '9', 'FORM WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '1', proj_id); 
   INSERT INTO `gantt_tasks` VALUES ('', '10', 'MANSONRY WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '1', proj_id); 

       INSERT INTO `gantt_tasks` VALUES ('', '11', 'a. EXTERIOR AND INTERIOR WALLS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '10', proj_id);





INSERT INTO `gantt_tasks` VALUES ('', '12', 'PHASE 2', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '0', proj_id);


INSERT INTO `gantt_tasks` VALUES ('', '13', 'STEEL WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '12', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '14', 'STEEL TRUSS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '13', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '15', 'ROOFING WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '12', proj_id);
    INSERT INTO `gantt_tasks` VALUES ('', '16', 'PLASTERING', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '12', proj_id);






INSERT INTO `gantt_tasks` VALUES ('', '17', 'PHASE 3', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '0', proj_id);


INSERT INTO `gantt_tasks` VALUES ('', '18', 'TILE WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '17', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '19', 'PAINTING WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '17', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '20', 'CEILING WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '17', proj_id);




INSERT INTO `gantt_tasks` VALUES ('', '21', 'PHASE 4', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '0', proj_id);


INSERT INTO `gantt_tasks` VALUES ('', '22', 'ELECTRICAL WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '21', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '23', 'a. LIGHTING WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '22', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '24', 'b.POWER LAYOUT', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '22', proj_id);
    INSERT INTO `gantt_tasks` VALUES ('', '25', 'c. MECHANICAL LAYOUT', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '22', proj_id);


  INSERT INTO `gantt_tasks` VALUES ('', '26', 'PLUMBING WORKS', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '21', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '27', 'a. SANITARY', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '26', proj_id);
  INSERT INTO `gantt_tasks` VALUES ('', '28', 'b. WATER LAYOUT', moment(start_date).format('YYYY-MM-DD'), moment(target_date).format('YYYY-MM-DD'), 
  '', '', '26', proj_id);



