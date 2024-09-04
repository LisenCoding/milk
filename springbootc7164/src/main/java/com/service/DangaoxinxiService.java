package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DangaoxinxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DangaoxinxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DangaoxinxiView;


/**
 * 牛奶信息
 *
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
public interface DangaoxinxiService extends IService<DangaoxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DangaoxinxiVO> selectListVO(Wrapper<DangaoxinxiEntity> wrapper);
   	
   	DangaoxinxiVO selectVO(@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);
   	
   	List<DangaoxinxiView> selectListView(Wrapper<DangaoxinxiEntity> wrapper);
   	
   	DangaoxinxiView selectView(@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DangaoxinxiEntity> wrapper);
   	

}

