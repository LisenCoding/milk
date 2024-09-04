package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.KouweiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.KouweiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.KouweiView;


/**
 * 口味
 *
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
public interface KouweiService extends IService<KouweiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<KouweiVO> selectListVO(Wrapper<KouweiEntity> wrapper);
   	
   	KouweiVO selectVO(@Param("ew") Wrapper<KouweiEntity> wrapper);
   	
   	List<KouweiView> selectListView(Wrapper<KouweiEntity> wrapper);
   	
   	KouweiView selectView(@Param("ew") Wrapper<KouweiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<KouweiEntity> wrapper);
   	

}

