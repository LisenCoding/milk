package com.dao;

import com.entity.DangaofenleiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DangaofenleiVO;
import com.entity.view.DangaofenleiView;


/**
 * 牛奶分类
 * 
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
public interface DangaofenleiDao extends BaseMapper<DangaofenleiEntity> {
	
	List<DangaofenleiVO> selectListVO(@Param("ew") Wrapper<DangaofenleiEntity> wrapper);
	
	DangaofenleiVO selectVO(@Param("ew") Wrapper<DangaofenleiEntity> wrapper);
	
	List<DangaofenleiView> selectListView(@Param("ew") Wrapper<DangaofenleiEntity> wrapper);

	List<DangaofenleiView> selectListView(Pagination page,@Param("ew") Wrapper<DangaofenleiEntity> wrapper);
	
	DangaofenleiView selectView(@Param("ew") Wrapper<DangaofenleiEntity> wrapper);
	

}
