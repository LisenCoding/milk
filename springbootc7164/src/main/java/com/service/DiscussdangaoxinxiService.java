package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscussdangaoxinxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscussdangaoxinxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscussdangaoxinxiView;


/**
 * 牛奶信息评论表
 *
 * @author 
 * @email 
 * @date 2024-03-30 19:48:40
 */
public interface DiscussdangaoxinxiService extends IService<DiscussdangaoxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussdangaoxinxiVO> selectListVO(Wrapper<DiscussdangaoxinxiEntity> wrapper);
   	
   	DiscussdangaoxinxiVO selectVO(@Param("ew") Wrapper<DiscussdangaoxinxiEntity> wrapper);
   	
   	List<DiscussdangaoxinxiView> selectListView(Wrapper<DiscussdangaoxinxiEntity> wrapper);
   	
   	DiscussdangaoxinxiView selectView(@Param("ew") Wrapper<DiscussdangaoxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussdangaoxinxiEntity> wrapper);
   	

}

