package com.dao;

import com.entity.DangaoxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DangaoxinxiVO;
import com.entity.view.DangaoxinxiView;


/**
 * 牛奶信息
 * 
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
public interface DangaoxinxiDao extends BaseMapper<DangaoxinxiEntity> {
	
	List<DangaoxinxiVO> selectListVO(@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);
	
	DangaoxinxiVO selectVO(@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);
	
	List<DangaoxinxiView> selectListView(@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);

	List<DangaoxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);
	
	DangaoxinxiView selectView(@Param("ew") Wrapper<DangaoxinxiEntity> wrapper);
	

}
